import { PortableText } from '@portabletext/react';
import type { PortableTextComponents } from '@portabletext/react';
import type { ArbitraryTypedObject } from '@portabletext/types';
import Image from 'next/image';
import { urlFor } from '@/app/lib/sanity.queries';
import type { PortableTextValue, SanityImageSource } from '@/app/lib/sanity.queries';

interface TableRow {
  _key?: string;
  cells: string[];
}

interface TableBlock extends ArbitraryTypedObject {
  _type: 'table';
  rows: TableRow[];
}

function getImageSource(value: ArbitraryTypedObject): SanityImageSource | null {
  const asset = value.asset;
  if (
    typeof asset !== 'object' ||
    asset === null ||
    !('_ref' in asset) ||
    typeof asset._ref !== 'string'
  ) {
    return null;
  }

  return { asset: { _ref: asset._ref, _type: 'reference' } };
}

function isTableBlock(value: ArbitraryTypedObject): value is TableBlock {
  const rows: unknown = value.rows;
  if (value._type !== 'table' || !Array.isArray(rows)) {
    return false;
  }

  return value.rows.every(
    (row: unknown): row is TableRow =>
      typeof row === 'object' &&
      row !== null &&
      'cells' in row &&
      Array.isArray(row.cells) &&
      row.cells.every((cell: unknown) => typeof cell === 'string')
  );
}

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className="text-3xl font-bold text-nova-dark mt-10 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold text-nova-dark mt-8 mb-3">{children}</h3>,
    normal: ({ children }) => <p className="text-gray-700 leading-relaxed mb-5">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-nova-blue pl-4 italic my-6 text-lg text-gray-600">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">{children}</ul>,
  },
  types: {
    image: ({ value }) => {
      const source = getImageSource(value);
      if (!source) return null;

      return (
        <div className="relative w-full h-[400px] my-10 rounded-2xl overflow-hidden">
          <Image
            src={urlFor(source).url()}
            alt="Zdjęcie w artykule"
            fill
            className="object-cover"
          />
        </div>
      );
    },
    // Table renderer for @sanity/table plugin
    table: ({ value }) => {
      if (!isTableBlock(value) || value.rows.length === 0) return null;

      const [header, ...bodyRows] = value.rows;

      return (
        <div className="my-8 overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-nova-bg">
              <tr>
                {header.cells.map((cell, index) => (
                  <th key={index} className="text-left font-semibold text-sm md:text-base px-4 py-3 border-b border-gray-100">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bodyRows.map((row, rowIndex) => (
                <tr key={row._key ?? rowIndex} className="odd:bg-white even:bg-gray-50">
                  {row.cells.map((cell, cellIndex) => (
                    <td key={cellIndex} className="py-3 px-4 align-top text-sm text-gray-700 border-b border-gray-100">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },
  },
};

export default function CustomPortableText({ value }: { value: PortableTextValue }) {
  return <PortableText value={value} components={components} />;
}