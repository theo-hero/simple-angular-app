import { Injectable, signal } from '@angular/core';
import info from "../../data/menu-info.json";

type SubjectData = {
  id: number,
  name: string,
  quantity: number
}

export type Subject = SubjectData & { selected: boolean };

const parseSubj = (data: SubjectData[]) => data.map(s => ({ ...s, selected: false }));

@Injectable({
  providedIn: 'root',
})
export class MenuInfoService {

  subjects = signal(parseSubj(info['subjects']));

  getSections() {
    return info;
  }

  getWelcomeInfo() {
    return info['welcome'];
  }

  getSubjects() {
    return this.subjects;
  }

}
