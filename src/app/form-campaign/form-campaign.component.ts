import { Component, OnInit } from '@angular/core';

import { FormService } from '../form.service';

@Component({
  selector: 'app-form-campaign',
  templateUrl: './form-campaign.component.html',
  styleUrls: ['./form-campaign.component.scss']
})
export class FormCampaignComponent implements OnInit {
  campaign: string;

  constructor(public fs: FormService) {
    this.campaign = fs.campaign;
  }

  ngOnInit() {
  }

}
