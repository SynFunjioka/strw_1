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

    getList(
        filters: {
            type    ?: string,
            duration?: string
        } = {}
    ) {
        if(Object.keys(filters).length === 0) return this.data;

        return this.data.filter(video => {
            for (const key in filters) {
                if (Object.prototype.hasOwnProperty.call(filters, key)) {
                    if (video[key] !== filters[key]) {
                        return false; // Si no coincide con alguna propiedad, el elemento no pasa el filtro
                    }
                }
            }
            return true;
        })
    }

    getVideo(id: number){
        return this.data.find(video => video.id === id);
    }
}

const instance = new DummyDB(fileData);

// console.log('data of instance', instance.data);

export default instance;