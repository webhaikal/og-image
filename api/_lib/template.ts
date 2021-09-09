
import { readFileSync } from 'fs';
import { ParsedRequest } from './types';

const rglr = readFileSync(`${__dirname}/../_fonts/Poppins-Regular.woff2`).toString('base64');
const bold = readFileSync(`${__dirname}/../_fonts/Poppins-Bold.woff2`).toString('base64');
const medi = readFileSync(`${__dirname}/../_fonts/Poppins-Medium.woff2`).toString('base64');
const bg1 = readFileSync(`${__dirname}/../_background/bg1.png`).toString('base64');

function getCss(theme: string, fontSize: string) {
    let background = '#EF457C';

    if (theme === 'alt') {
        background = '#FFFFFF';
    }
    return `
    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        src: url(data:font/woff2;charset=utf-8;base64,${rglr}) format('woff2');
    }

    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        src: url(data:font/woff2;charset=utf-8;base64,${bold}) format('woff2');
    }

    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        src: url(data:font/woff2;charset=utf-8;base64,${medi})  format("woff2");
      }

    body {
        background: ${background};
        font-family: 'Poppins', sans-serif;
    }

    .bg {
        background-image: url('data:image/png;base64,${bg1}');
        height: 100%;
        width: 100%;
        font-size: ${fontSize}px;
    }`;
}

export function getHtml(parsedReq: ParsedRequest) {
    const { theme, fontSize, groom, bride, date, time, location } = parsedReq;
    return `<!DOCTYPE html>
<html>
    <meta charset="utf-8">
    <title>Generated Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <style>
        ${getCss(theme, fontSize)}
    </style>
    <body>
    <div class="relative h-screen w-screen flex items-center justify-center">
        <div class="absolute h-screen bottom-0 right-0 top-0" style="width: 50vw"><div class="bg"></div></div>
        <div class="container flex flex-col">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="546.41" height="90.954" viewBox="0 0 546.41 90.954">
                    <g id="Layer_2" data-name="Layer 2" transform="translate(-0.01)">
                    <g id="Layer_1" data-name="Layer 1">
                        <path id="Path_1670" data-name="Path 1670" d="M.66,44.83H545.2" fill="#fff"/>
                        <path id="Path_1671" data-name="Path 1671" d="M109.75,10.9c49.58-6,110.13,1.81,160.18-3.64C330,0,395.05,0,455.12,0c0,3.63-5,9.08,0,10.9,20,5.44,20,12.71,20,20,0,3.64-15,0-10,3.64-15,0-40.05,1.81-25,5.44,5,3.64,25,0,30,5.45s-5,10.9,0,16.34h20c5,3.64-5,10.9,0,10.9,15,3.64,35,1.82,55.05,1.82,0,3.63,5,7.26-5,9.08C365,87.17,184.83,94.44,9.65,89c-20-1.81-5-9.07,10-14.52-5,1.82-5-3.64-10-1.82,0-5.45,10-14.52,30-16.34h-15c-5-1.82,0-5.45,0-9.08,5,0,10,0,10-1.82V38.14h-20c5,0,10,0,10-1.82V29.05c10-1.81,25,1.82,35,0V23.61c-10-1.82-25,0-35,0,5-1.82,5-3.63,5-7.27,15-1.82,30,3.64,45-1.82h-15C69.72,5.44,94.74,12.71,109.75,10.9Z" fill="#ff9aac"/>
                    </g>
                    </g>
                    <text id="Ijab_Qabul" data-name="Ijab Qabul" transform="translate(104.733 71.231)" fill="#fff" font-size="55.706" font-family="Poppins-Medium, Poppins" font-weight="500"><tspan x="0" y="0">Ijab Qabul</tspan></text>
                </svg>          
            </div>
            <div class="inline mt-10 z-10">
                <span class="text-9xl poppins font-medium text-white mr-1">${groom}</span>
                <span class="text-9xl poppins font-bold text-white ml-1">${bride}</span>
            </div>
            <div class="max-w-xs w-full h-4 my-8" style="background: #FF9AAC;"></div>
            <div class="flex flex-row items-center">
                <div class="flex flex-row items-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28.09" height="30.899" viewBox="0 0 28.09 30.899">
                        <path id="Path_1669" data-name="Path 1669" d="M227.174,653.653h-1.4v-2.809h-2.809v2.809H208.916v-2.809h-2.809v2.809h-1.4a2.817,2.817,0,0,0-2.809,2.809v22.472a2.817,2.817,0,0,0,2.809,2.809h22.472a2.817,2.817,0,0,0,2.809-2.809V656.462A2.817,2.817,0,0,0,227.174,653.653Zm0,7.862H204.7v-2.731h22.472Z" transform="translate(-201.893 -650.844)" fill="#ff9aac"/>
                    </svg>
                    <span class="ml-2 font-medium text-3xl text-white">${date}</span>
                </div>
                <div class="flex flex-row items-center mx-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28.722" height="28.722" viewBox="0 0 28.722 28.722">
                        <g id="Group_18" data-name="Group 18" transform="translate(-610.019 -652.692)">
                        <g id="Group_17" data-name="Group 17">
                            <g id="Group_16" data-name="Group 16">
                            <path id="Path_1668" data-name="Path 1668" d="M624.38,652.692a14.361,14.361,0,1,0,14.361,14.361A14.4,14.4,0,0,0,624.38,652.692Zm6.032,20.392-7.468-4.595v-8.617H625.1v7.468l6.463,3.877Z" fill="#ff9aac"/>
                            </g>
                        </g>
                        </g>
                    </svg>
                    <span class="ml-2 font-medium text-3xl text-white">${time}</span>              
                </div>
                <div class="flex flex-row items-center ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26.973" height="38.532" viewBox="0 0 26.973 38.532">
                        <path id="Path_1667" data-name="Path 1667" d="M950.071,647.593a13.477,13.477,0,0,0-13.487,13.486c0,10.115,13.487,25.046,13.487,25.046s13.486-14.931,13.486-25.046A13.476,13.476,0,0,0,950.071,647.593Zm0,18.3a4.816,4.816,0,1,1,4.816-4.816A4.818,4.818,0,0,1,950.071,665.9Z" transform="translate(-936.584 -647.593)" fill="#ff9aac"/>
                    </svg> 
                    <span class="ml-2 font-medium text-3xl text-white">${location}</span>             
                </div>              
            </div>
        </div>
        <div class="absolute bottom-8 mx-auto text-2xl text-white">khwn.my</div>
        <div class="absolute" style="top: 15rem;right: 8rem;z-index: 10;">
            <svg xmlns="http://www.w3.org/2000/svg" width="247" height="247" viewBox="0 0 247 247">
                <g id="Group_10" data-name="Group 10" transform="translate(-1443.73 -242.651)">
                    <circle id="Ellipse_3" data-name="Ellipse 3" cx="123.5" cy="123.5" r="123.5" transform="translate(1443.73 242.651)" fill="#fff"/>
                    <g id="Group_9" data-name="Group 9">
                    <path id="Path_1662" data-name="Path 1662" d="M1632.239,336.565c-7.909-7.914-20.095-10.227-34.31-6.517a66.99,66.99,0,0,0-9.082,3.1q-2.9,1.224-5.769,2.733-2.013-2.4-4.242-4.743c-.581-.612-1.175-1.218-1.78-1.824-24.831-24.824-56.519-32.04-72.137-16.422-7.914,7.915-10.227,20.1-6.523,34.31,3.394,12.99,11.537,26.426,22.945,37.833a102.416,102.416,0,0,0,8.953,7.964c.124-.618.253-1.243.4-1.867a67.312,67.312,0,0,1,1.879-6.623,8.344,8.344,0,0,0-2.008-8.617l-.038-.039c-9.8-9.8-16.744-21.139-19.563-31.928-1.441-5.546-2.956-15.755,3.141-21.851,3.394-3.394,8.062-4.427,12.495-4.427a37.814,37.814,0,0,1,9.349,1.292c10.715,2.8,21.974,9.664,31.725,19.359.068.062.136.13.2.2q2.124,2.124,4.062,4.334a83.556,83.556,0,0,1,7.791,10.381c1.131,1.787,2.164,3.593,3.091,5.4a57.345,57.345,0,0,1,4.613,11.816c1.446,5.546,2.961,15.754-3.135,21.85s-16.305,4.582-21.845,3.135a52.235,52.235,0,0,1-6.1-2,59.731,59.731,0,0,1-5.657-2.578,57.112,57.112,0,0,1,2.287-5.775,80.231,80.231,0,0,1,16.3-22.89l.455-.451a8.224,8.224,0,0,0,.785-10.876q-1.641-2.129-3.478-4.2-3.57,2.967-6.943,6.344a94.306,94.306,0,0,0-18.085,24.855q-1.438,2.922-2.566,5.837a59.863,59.863,0,0,0-3.568,13.411,44.915,44.915,0,0,0-.433,7.085c.174,8.267,2.845,15.563,8.23,20.948,5.571,5.571,13.176,8.242,21.795,8.242,7.778,0,16.366-2.17,25.01-6.337a94.274,94.274,0,0,0,25.332-18.327C1640.647,383.871,1647.857,352.183,1632.239,336.565Zm-6.047,31.026c-2.814,10.795-9.757,22.135-19.557,31.929s-21.14,16.743-31.929,19.563c-5.54,1.446-15.748,2.961-21.851-3.141a13.828,13.828,0,0,1-2.98-4.495,19.927,19.927,0,0,1-1.434-7.3q3.218,1.455,6.442,2.547c1.435.482,2.863.915,4.291,1.286a50.009,50.009,0,0,0,12.614,1.725c8.767,0,16.242-2.8,21.689-8.242,5.571-5.571,8.236-13.188,8.236-21.8s-2.665-18.227-7.753-27.8q-1.428-2.689-3.11-5.36a60.354,60.354,0,0,1,5.756-2.449c1.546-.556,3.079-1.039,4.606-1.434a37.8,37.8,0,0,1,9.349-1.3c4.427,0,9.1,1.039,12.5,4.433C1629.153,351.843,1627.638,362.051,1626.192,367.591Z" fill="#ef457c"/>
                    </g>
                </g>
            </svg>
        </div>
    </body>
</html>`;
}
