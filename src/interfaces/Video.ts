enum tVideo { guitar, piano, violin }
export default interface iVideo{
    id      : number,
    type    : tVideo,
    name    : string
    path    : string
    image   : string
    duration: string
}