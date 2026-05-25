import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Sidebar, Topbar } from '@omnisphere-portal/ui';

@Component({
  selector: 'app-shell-layout',
  imports: [RouterModule, Sidebar, Topbar],
  templateUrl: './shell-layout.html',
  styleUrl: './shell-layout.scss',
})
export class ShellLayout {}
