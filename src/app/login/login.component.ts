import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
    user: any;
    error:null;
    erro=false;
    username = null;
    password = null;
    constructor(private router: Router, private login$:LoginService) {}
    ngOnInit() {}
    login() {
        this.login$.login(this.username, this.password)
          .subscribe(
            user => {
              this.router.navigate(['/inicio']);
            },
            err => {
                this.erro=true;
                this.error = err.error
                console.log(this.error)
            }
          );
      }
}
