import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public facebook = faFacebook
  public instagram = faInstagram
  public twitter = faTwitter
  constructor() { }

  ngOnInit(): void {
  }

}
