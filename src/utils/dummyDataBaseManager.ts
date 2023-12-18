import path from 'path';
import fs from 'fs/promises';
import iVideo from '@/interfaces/Video';

const dummyDB_path = path.join(process.cwd(), 'src', 'utils', 'dummyDatabase.json');

let fileData: iVideo[] = [];
await (async () => {
    try {
        const buffer = (await fs.readFile(dummyDB_path));

        fileData = JSON.parse(buffer.toString()).videos;
        // Puedes hacer más cosas aquí después de cargar los datos si es necesario
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
})();

class DummyDB {
    data : iVideo[];

    constructor(data: iVideo[]){
        this.data = data; 
    }

    getData() {
        return this.data;
    }
}

const instance = new DummyDB(fileData);

// console.log('data of instance', instance.data);

export default instance;