export type FileType = 'png' | 'jpeg';
export type Theme = 'light' | 'dark';

export interface ParsedRequest {
    fileType: FileType;
    text: string;
    theme: Theme;
    md: boolean;
    groom: string;
    bride: string;
    date: string;
    time: string;
    location: string;
    fontSize: string;
    images: string[];
    widths: string[];
    heights: string[];
}
