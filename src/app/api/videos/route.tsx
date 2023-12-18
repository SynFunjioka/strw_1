import iVideo from '@/interfaces/Video';
import DummyDB from '@/utils/dummyDataBaseManager';

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(request: Request) {
    try {
        const videos = DummyDB.getData();

        return Response.json({status: true, data: videos});
 
    } catch (error) {
        return Response.error();
    }
}