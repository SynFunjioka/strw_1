import iVideo from '@/interfaces/Video';
import DummyDB from '@/utils/dummyDataBaseManager';

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(
    request: Request,
) {

    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');

    const filters = {
        ...(type && {type})
    }

    console.log('filters', filters);
    
    try {
        console.log('query params', searchParams);
        const videos = DummyDB.getList(filters);

        return Response.json({status: true, data: videos});
 
    } catch (error) {
        return Response.error();
    }
}