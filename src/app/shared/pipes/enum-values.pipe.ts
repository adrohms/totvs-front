import { Pipe, PipeTransform } from '@angular/core';

class KeyValuePairObject {
  constructor(
    public key?: string,
    public value?: string | null,
  ) {}
}

@Pipe({
  name: 'enumToKeyValuePairArray'
})
export class EnumValuesPipe implements PipeTransform {
  transform(enumType: any): any[] {
    const keyValuePairArray = [];
    for (const key in enumType) {
      if (enumType.hasOwnProperty(key)) {
        const keyValuePairObject = new KeyValuePairObject(key, enumType[key]);
        keyValuePairArray.push(keyValuePairObject);
      }
    }
    return keyValuePairArray;
  }

}
