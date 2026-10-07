const sharp=require('sharp');
const fs=require('fs');
(async()=>{
for(let n=1;n<=7;n++){
const source=`C:/Users/Zeeshan/Downloads/Original Images/${n}.webp`;
const {data,info}=await sharp(source).removeAlpha().raw().toBuffer({resolveWithObject:true});
const ranges=[];let start=-1;
for(let y=0;y<info.height;y++){let count=0;for(let x=0;x<info.width;x++){const i=(y*info.width+x)*info.channels;if(Math.min(data[i],data[i+1],data[i+2])<238)count++;}const content=count>info.width*.05;if(content&&start<0)start=y;if(!content&&start>=0){if(y-start>100)ranges.push([start,y-1]);start=-1;}}
if(start>=0)ranges.push([start,info.height-1]);
for(let p=0;p<ranges.length;p++){const [top,bottom]=ranges[p];let left=info.width,right=0;for(let x=0;x<info.width;x++){let count=0;for(let y=top;y<=bottom;y++){const i=(y*info.width+x)*info.channels;if(Math.min(data[i],data[i+1],data[i+2])<238)count++;}if(count>(bottom-top+1)*.04){left=Math.min(left,x);right=x;}}
const crop={left:left+2,top:top+2,width:right-left-3,height:bottom-top-3};const name=`original-${n}${ranges.length>1?`-${p+1}`:''}.webp`;
await sharp(source).extract(crop).webp({quality:95}).toFile(`public/images/originals/${name}`);console.log(name,JSON.stringify(crop));
}
}
})().catch(e=>{console.error(e);process.exit(1)});

