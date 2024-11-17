export function generateImageLink(collection: string, record: string, filename: string): string {
    return `${import.meta.env.VITE_POCKETBASE_API_URL}/api/files/${collection}/${record}/${filename}`;
}