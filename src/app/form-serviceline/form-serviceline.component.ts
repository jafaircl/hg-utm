import { Component, OnInit } from '@angular/core';

import { FormService } from '../form.service';

@Component({
  selector: 'app-form-serviceline',
  templateUrl: './form-serviceline.component.html',
  styleUrls: ['./form-serviceline.component.scss']
})
export class FormServicelineComponent implements OnInit {

  constructor(public fs: FormService) { }

  ngOnInit() {
  }

}
