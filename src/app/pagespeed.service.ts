import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

export class PagespeedResponse {
  screenshot: any;
}

@Injectable()
export class PagespeedService {

  constructor(public _http: Http) { }

  analyzeUrl(url: string, strategy: string = 'mobile'){
    return this._http.get(`https://www.googleapis.com/pagespeedonline/v2/runPagespeed?url=${url}&strategy=${strategy}&screenshot=true&key=AIzaSyDo3IK17PHduBexuTARbPTPpKEw3AWLvjY`)
                          .map((res:Response) => res.json())
                          .do(response => console.log(response))
                          .publishReplay(1)
                          .refCount();
  }

  formatScreenshot(_data){
    return 'data:' + _data.screenshot.mime_type + ';base64,' + _data.screenshot.data.replace(/_/g,'/').replace(/-/g,'+');
  }

  getSpeedScore(_data){
    return _data.ruleGroups.SPEED.score;
  }
  
  getUsabilityScore(_data){
    if(_data.ruleGroups.USABILITY){
      return _data.ruleGroups.USABILITY.score;
    } else {
      return 'N/A';
    }
  }

  getPassedRules(_data){
    let arr = [];
    let results = _data.formattedResults.ruleResults;
    for(let i in results){
      if(results[i].ruleImpact === 0){
        arr.push(results[i]);
      }
    }
    return arr;
  }

  getFailedRules(_data){
    let arr = [];
    let results = _data.formattedResults.ruleResults;
    for(let i in results){
      if(results[i].ruleImpact > 0){
        arr.push(results[i]);
      }
    }
    return arr;
  }
}
