import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private firestore: AngularFirestore) { }
  public title = 'frases-dash';

  public form = new FormGroup({
    titulo: new FormControl(''),
    frase: new FormControl(''),
    autor: new FormControl(''),
    autor_url: new FormControl(''),
    usuario_rede_social: new FormControl(''),
    link_usuario_rede_social: new FormControl(''),
    nome_livro: new FormControl(''),
    autor_livro: new FormControl(''),
    resumo_livro: new FormControl(''),
    livro_url: new FormControl(''),
    likes: new FormControl(''),
    data_exibicao: new FormControl('')
  });

  private convertDateToDoc(chooseDate: string) {
    const splitDate = chooseDate.split('-');
    return `${splitDate[2]}${splitDate[1]}${splitDate[0]}`
  }

  public add() {
    this.firestore
      .collection('frases')
      .doc(this.convertDateToDoc(this.form.get('data_exibicao')?.value))
      .set(this.form.value)
      .then(res => {
        console.log(res);
        // this.form.reset();
      })
      .catch(e => {
        console.log(e);
      });
  }
}
