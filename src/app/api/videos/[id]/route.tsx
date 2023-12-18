import iVideo from '@/interfaces/Video';
import DummyDB from '@/utils/dummyDataBaseManager';

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const videos = DummyDB.getVideo(parseInt(params.id));

        console.log('video res', videos);

        return Response.json({status: true, data: videos});
 
    } catch (error) {
        return Response.error();
    }
}