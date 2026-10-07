import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
process.env.NEXT_PUBLIC_SUPABASE_URL='https://test.supabase.co';
process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY='test-public-key';
const source=await readFile(new URL('../lib/supabase.js',import.meta.url),'utf8');
const api=await import('data:text/javascript;base64,'+Buffer.from(source).toString('base64'));
let last;
global.fetch=async(url,opts)=>{last={url,opts};return {ok:true,text:async()=>''}};
const carrier=new FormData();for(const [k,v] of [['Full Name','Test Carrier'],['Company Name','Test LLC'],['Phone Number','555-1234'],['Email Address','test@example.com'],['Type of Operation','Small Fleet'],['Equipment','Dry Van'],['Equipment','Reefer'],['Preferred Lanes / Regions','Midwest'],['Needs','Dispatch support'],['Contact consent','Agreed']])carrier.append(k,v);
// The browser FormData constructor consumes forms; provide a form adapter in this unit check.
const NativeFormData=global.FormData;global.FormData=class{constructor(form){return form}};
await api.submitCarrier(carrier);assert.equal(last.url,'https://test.supabase.co/rest/v1/carrier_inquiries');const payload=JSON.parse(last.opts.body);assert.deepEqual(payload.equipment,['Dry Van','Reefer']);assert.equal(payload.consent,true);assert.equal(payload.full_name,'Test Carrier');assert.equal(last.opts.headers.Prefer,'return=minimal');assert.equal(last.opts.headers.Authorization,undefined);
const contact=new NativeFormData();for(const [k,v] of [['Name','Test Contact'],['Email','contact@example.com'],['Subject','Hello'],['Message','Contact request']])contact.append(k,v);await api.submitContact(contact);assert.equal(JSON.parse(last.opts.body).phone,null);assert.equal(JSON.parse(last.opts.body).message,'Contact request');
global.fetch=async()=>({ok:false,text:async()=>JSON.stringify({message:'Denied by policy'})});await assert.rejects(()=>api.submitContact(contact),/Denied by policy/);
global.FormData=NativeFormData;console.log('PASS: carrier/contact payload mapping, multiple equipment, consent, minimal insert, and error handling.');
