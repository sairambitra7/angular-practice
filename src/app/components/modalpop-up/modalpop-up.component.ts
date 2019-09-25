import { Component, OnInit, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-modalpop-up",
  templateUrl: "./modalpop-up.component.html",
  styleUrls: ["./modalpop-up.component.scss"]
})
export class ModalpopUpComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ModalpopUpComponent>) {}

  ngOnInit() {}
}
