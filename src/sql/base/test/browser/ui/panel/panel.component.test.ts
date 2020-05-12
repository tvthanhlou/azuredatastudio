/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

//import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PanelComponent } from 'sql/base/browser/ui/panel/panel.component';
import * as assert from 'assert';

suite('PanelComponent', () => {
	let component: PanelComponent;
	let fixture: ComponentFixture<PanelComponent>;

	suiteSetup(async () => {
		TestBed.configureTestingModule({
			declarations: [PanelComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PanelComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	test('should create', () => {
		assert(component, 'Component should be created');
	});
});
