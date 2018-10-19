import { Component } from "@angular/core";

@Component({
    selector: 'app-error',
    template: `
        <br>
        <br>
        Oops! the game id is not valid
    `,
    styles: ['']
})
export class ErrorComponent {
    constructor() {}
}