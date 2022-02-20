import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ManagerEditComponent } from '../managers/ManagerEdit/ManagerEdit.component';

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<ManagerEditComponent> {
    canDeactivate(component: ManagerEditComponent) {
        if (component.editForm1.dirty || component.edit2form.dirty || component.edit3form.dirty) {
            return confirm('Are you sure you want to continue? Any unsaved changes will be lost');
        }
        return true;
    }

}
