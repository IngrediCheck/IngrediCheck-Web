export type JsonLd = Record<string, unknown>;

export const normalizeStructuredData = (
  structuredData?: JsonLd | JsonLd[],
) => {
  if (!structuredData) {
    return [];
  }

  return Array.isArray(structuredData) ? structuredData : [structuredData];
};

