export interface NasaResponse {
    copyright?: string;
    date: string;
    explanation: string;
    hdurl?: string;
    media_type: MediaType;
    title: string;
    url: string;
    code?: number;
}

export enum MediaType {
    Image = "image",
    Video = "video",
}