import { Injectable } from '@angular/core';

@Injectable()
export class FormService {
  _name: string;
  _channel: string = 'select';
  _agency: string = 'hg';
  _source: string = 'select';
  _medium: string;
  _campaign: string;
  _term: string;
  _content: string;
  _jobnumber: string;
  _serviceline: string;
  _dynamic: Array<any> = [];
  _url: string;

  constructor() { }

  setName(val){
    this._name = val;
  }

  get name() {
    if(this._name === undefined){
      return '';
    } else {
      return this._name;
    }
  }

  setChannel(val){
    this._channel = val;
  }

  get channel() {
    return this._channel;
  }

  setSource(val){
    this._source = val;
  }

  get source() {
    return this._source;
  }

  setMedium(val){
    this._medium = val;
  }

  get medium() {
    return this._medium;
  }

  setCampaign(val){
    this._campaign = val;
  }

  get campaign() {
    return this._campaign;
  }

  setAgency(val){
    this._agency = val;
  }

  get agency() {
    return this._agency;
  }

  setJobnumber(val){
    this._jobnumber = val;
  }

  get jobnumber() {
    return this._jobnumber;
  }

  setServiceline(val){
    this._serviceline = val;
  }

  get serviceline() {
    return this._serviceline;
  }

  setDynamic(arr){
    this._dynamic = arr;
  }

  get dynamic(){
    return this._dynamic;
  }

  setTerm(val){
    this._term = val;
  }

  get term() {
    return this._term;
  }

  setContent(val){
    this._content = val;
  }

  get content() {
    return this._content;
  }

  setUrl(val){
    this._url = val;
  }

  get url() {
    if(this._url === undefined){
      return '';
    } else {
      return this._url;
    }
  }


  get utm() {
    let _utm = `?`;
    let _ampersand = ``;
    
    if(this._source !== undefined){
      _utm += `utm_source=${this._source}`;
      _ampersand = `&`;
    }
    
    if(this._channel !== ''){
      _utm += `${_ampersand}channel=${this._channel}`;
      _ampersand = `&`;
    }
    
    if(this._jobnumber !== undefined && this._jobnumber !== ''){
      _utm += `${_ampersand}jobnumber=${encodeURI(this._jobnumber)}`;
      _ampersand = `&`;
    }
    
    if(this._serviceline !== undefined && this._serviceline !== ''){
      _utm += `${_ampersand}serviceline=${encodeURI(this._serviceline)}`;
      _ampersand = `&`;
    }
    
    if(this._agency !== ''){
      _utm += `${_ampersand}agency=${this._agency}`;
      _ampersand = `&`;
    }
    
    if(this._medium !== undefined && this._medium !== ''){
      _utm += `${_ampersand}utm_medium=${encodeURI(this._medium)}`;
      _ampersand = `&`;
    }
    
    if(this._campaign !== undefined && this._campaign !== ''){
      _utm += `${_ampersand}utm_campaign=${encodeURI(this._campaign)}`;
      _ampersand = `&`;
    }
    
    if(this._term !== undefined && this._term !== ''){
      _utm += `${_ampersand}utm_term=${encodeURI(this._term)}`;
      _ampersand = `&`;
    }
    
    if(this._content !== undefined && this._content !== ''){
      _utm += `${_ampersand}utm_content=${encodeURI(this._content)}`;
      _ampersand = `&`;
    }
    
    if(this._dynamic.length !== 0){
      _utm += _ampersand + this._dynamic.join('&');
      _ampersand = `&`;
    }
    
    return _utm;
  }

  get fullUrl() {
    console.log(this.url + this.utm);
    return this.url.indexOf('http') > -1 ? this.url + this.utm : 'https://' + this.url + this.utm;
  }
}
