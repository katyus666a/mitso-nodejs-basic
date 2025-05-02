
import { promises as fs } from 'fs';
import { join } from 'path';

const create = async () => {
    // Write your code here 
    const folderPath = join('files');
    const filePath = join(folderPath, 'fresh.txt');
    const content = '12345';

    try {
        
        await fs.access(filePath);
        throw new Error('FS operation failed');
    } catch (err) {
        if (err.code === 'ENOENT') {
            await fs.writeFile(filePath, content, 'utf8');
        } else {
            throw err;
        }
    }
};

await create();
await create();