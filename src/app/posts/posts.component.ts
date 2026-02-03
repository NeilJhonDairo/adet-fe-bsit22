import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts = [
    { title: 'kanibalismo', description: 'Pag-Ibig ay Kanibalismo II" by fitterkarma is an edgy, Filipino indie pop-rock song exploring the consuming, obsessive, and sometimes destructive nature of intense love.' },
    { title: 'Sagip', description: 'by Jan Roberts is a heartfelt OPM love song about unwavering support, devotion, and unconditional love during difficult times.' },
    { title: 'Araw-Araw', description: ' by Ben&Ben is a poignant ballad about choosing to love someone unconditionally every single day, embracing their imperfections through both high and low points in a relationship' }
  ];

  deletePost(index: number) {
    this.posts.splice(index, 1);
  }
}