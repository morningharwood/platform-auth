import { FormlyFieldConfig } from '@ngx-formly/core';

export interface Role {
  id: string;

  type: string;
}

export class FormlyRole {
  public static create(): any {
    return {
      tagName: '',
      id: '1',
      type: 'Admin'
    };
  }

  public static create2(): any {
    return {
      tagName: '',
      id: '2',
      type: 'Admin'
    };
  }

  public static config(): FormlyFieldConfig[] {
    return [
      {
        key: 'id',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'Role Id',
          placeholder: 'Role id',
          readOnly: true
        }
      },
      {
        key: 'type',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'Give Role a name',
          placeholder: 'Role name'
        },
        validation: {
          messages: {
            maxLength: 'Tag name is too long'
          }
        },
        validators: {
          maxLength: ({ value }) => {
            return value.length <= 25;
          }
        }
      }
    ];
  }
}
