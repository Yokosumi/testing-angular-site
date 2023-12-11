import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-info-box',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './info-box.component.html',
	styleUrl: './info-box.component.scss',
})
export class InfoBoxComponent {
	@Input() title = '(title)';
	@Input() body = '(body)';
	@Input() author = '(author)';
	@Input() status = '(status unknown)';

	dateOfInfo = 'Dec 23, 2022';
	statusColor = '';
	showDevInfo = false;

	ngOnInit() {
		this.statusColor =
			this.status === 'success'
				? 'lightgreen'
				: this.status === 'danger'
				? 'tomato'
				: 'gray';
	}

	handleShowDevInfoToggle = () => {
		this.showDevInfo = !this.showDevInfo;
	};
}
