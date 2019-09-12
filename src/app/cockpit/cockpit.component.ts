import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('srvCreated') serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  onAddServer(srvNameInput: HTMLInputElement) {
    this.serverCreated.emit({ serverName: srvNameInput.value, serverContent: this.serverContentInput.nativeElement.value });
    // console.log(this.serverContentInput);
  }

  onAddBlueprint(srvNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({ serverName: srvNameInput.value, serverContent:  this.serverContentInput.nativeElement.value });
  }

}
