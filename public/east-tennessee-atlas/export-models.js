(function(root){
 const csvCell=value=>'"'+String(value??'').replace(/"/g,'""')+'"';
 function buildAnalysisCSV(rows,options={}){
  const columns=options.columns||[];
  const metadataColumns=['selected_score','service','mode','indicator','weights','hazard_resolution','access_method','screen_criteria'];
  const metadata=options.metadata||{};
  const lines=[columns.concat(metadataColumns)];
  for(const row of rows)lines.push(columns.map(key=>row[key]??'').concat(metadataColumns.map(key=>key==='selected_score'?row.selected_score:metadata[key]??'')));
  return lines.map(row=>row.map(csvCell).join(',')).join('\r\n');
 }
 function buildReviewPackage(input){
  const required=['configuration','shortlist','comparison','audit','method','dataVersions','created'];
  for(const key of required)if(input[key]===undefined)throw Error('Missing review package field: '+key);
  return{schema:'east-tennessee-resilience-atlas-review-v1',...input,operationalUse:false};
 }
 function stringifyJSON(value){return JSON.stringify(value,null,2)+'\n'}
 function downloadText(filename,value,type='text/plain;charset=utf-8'){
  const url=URL.createObjectURL(new Blob([value],{type})),anchor=document.createElement('a');
  anchor.href=url;anchor.download=filename;anchor.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
 }
 const api={buildAnalysisCSV,buildReviewPackage,stringifyJSON,downloadText};
 root.AtlasExports=api;
 if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof globalThis!=='undefined'?globalThis:this);
