import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  readonly form: FormGroup;
  submitted = false;
  sent = false;

  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      name:    ['', [Validators.required, Validators.minLength(2)]],
      email:   ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get f() { return this.form.controls; }

  /**
   * No backend wired yet — opens the user's mail client with a prefilled message.
   * Swap this for an HTTP call (EmailJS, Formspree, or your own API) when ready.
   */
  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) return;

    const { name, email, message } = this.form.value as { name: string; email: string; message: string };
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:md.enayet.hossain329@gmail.com?subject=${subject}&body=${body}`;
    this.sent = true;
  }
}
