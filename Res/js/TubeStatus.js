//Defining a class TubeStatus

/*
 * TODO: fix font style, size
 * TODO: pull in tube status data
 * TODO: dynamically create each tube line label
 * TODO: link to map
 * TODO: link to route planner
 */
Osp.Core.Class.define("TubeStatus",
{
	extend : Osp.Core.Object,
	
	members :
	{
		form : null,
		
		//This method is called from index.html
		launch : function()
		{
			// Form, frame
			this.form = new Osp.Ui.Controls.Form({ style : Osp.Ui.Controls.FormStyle.INDICATOR | Osp.Ui.Controls.FormStyle.HEADER });
			this.form.setBackgroundColor('gray');
			Osp.Ui.Controls.Frame.getInstance().addControl(this.form);
			Osp.Ui.Controls.Frame.getInstance().setCurrentForm(this.form);
			// Header
			headerObj = this.form.getHeader();
			headerObj.setHeaderStyle(Osp.Ui.Controls.HeaderStyle.TITLE);
			headerObj.setTitleText("Tube Status");
			headerObj.setTitleTextColor("white");

			statusRequest = Osp.Core.Ajax({
				'url': 'http://api.tubeupdates.com/',
				'async': false,
				'method': 'GET',
				'parameters': {'method': 'get.status', 'lines':'all', 'format':'json'},
				'context': this,
				'responseType': 'application/json',
				'requestHeaders': {'Content-Type': 'application/json'}
			});

			statusRequest.send();
			statusResult = statusRequest.returnStatusText();


			/*
			// What can you do with blankSlate?!
			var blankSlateObj = new Osp.Ui.Controls.BlankSlate({bounds: {x:10,y:10,width:100,height:100}, mode: Osp.Ui.Controls.BlankSlateMode.MARKUP});
			this.form.addControl(blankSlateObj);
			var divElement = blankSlateObj.getDivNode();
			
			labelObj = new Osp.Ui.Controls.Label({
					bounds: { x: 0, y:0, width: this.form.getClientAreaBounds().width, height: labelHeight},
					text: 'Test',
					multiLine: false
				});
			labelObj.setBackgroundColor('white');
			labelObj.setTextColor('black');
			 */
			
			var labelHeight = this.form.getClientAreaBounds().height/14 // screen height by number of lines

			bakerlooLabelObj = new Osp.Ui.Controls.Label({
				bounds: { x: 0, y:0, width: this.form.getClientAreaBounds().width, height: labelHeight},
				text: 'Bakerloo',
				multiLine: false
			});
			bakerlooLabelObj.setBackgroundColor('#AE6118');
			bakerlooLabelObj.setTextColor('white');

			centralLabelObj = new Osp.Ui.Controls.Label({
				bounds: { x: 0, y:labelHeight, width: this.form.getClientAreaBounds().width, height: labelHeight},
				text: 'Central',
				multiLine: false
			});
			centralLabelObj.setBackgroundColor('#E41F1F');
			centralLabelObj.setTextColor('white');

			circleLabelObj = new Osp.Ui.Controls.Label({
				bounds: { x: 0, y:labelHeight*2, width: this.form.getClientAreaBounds().width, height: labelHeight},
				text: 'Circle',
				multiLine: false
			});
			circleLabelObj.setBackgroundColor('#F8D42D');
			circleLabelObj.setTextColor('black');

			districtLabelObj = new Osp.Ui.Controls.Label({
				bounds: { x: 0, y:labelHeight*3, width: this.form.getClientAreaBounds().width, height: labelHeight},
				text: 'District',
				multiLine: false
			});
			districtLabelObj.setBackgroundColor('#00A575');
			districtLabelObj.setTextColor('white');

			eastlondonLabelObj = new Osp.Ui.Controls.Label({
				bounds: { x: 0, y:labelHeight*4, width: this.form.getClientAreaBounds().width, height: labelHeight},
				text: 'East London',
				multiLine: false
			});
			eastlondonLabelObj.setBackgroundColor('#F2AD41');
			eastlondonLabelObj.setTextColor('white');

			hammersmithLabelObj = new Osp.Ui.Controls.Label({
				bounds: { x: 0, y:labelHeight*5, width: this.form.getClientAreaBounds().width, height: labelHeight},
				text: 'Hammersmith & City',
				multiLine: false
			});
			hammersmithLabelObj.setBackgroundColor('#E899A8');
			hammersmithLabelObj.setTextColor('white');

			jubileeLabelObj = new Osp.Ui.Controls.Label({
				bounds: { x: 0, y:labelHeight*6, width: this.form.getClientAreaBounds().width, height: labelHeight},
				text: 'Jubilee',
				multiLine: false
			});
			jubileeLabelObj.setBackgroundColor('#8F989E');
			jubileeLabelObj.setTextColor('white');

			metropolitanLabelObj = new Osp.Ui.Controls.Label({
				bounds: { x: 0, y:labelHeight*7, width: this.form.getClientAreaBounds().width, height: labelHeight},
				text: 'Metropolitan',
				multiLine: false
			});
			metropolitanLabelObj.setBackgroundColor('#893267');
			metropolitanLabelObj.setTextColor('white');

			northernLabelObj = new Osp.Ui.Controls.Label({
				bounds: { x: 0, y:labelHeight*8, width: this.form.getClientAreaBounds().width, height: labelHeight},
				text: 'Northern',
				multiLine: false
			});
			northernLabelObj.setBackgroundColor('#000000');
			northernLabelObj.setTextColor('white');

			piccadillyLabelObj = new Osp.Ui.Controls.Label({
				bounds: { x: 0, y:labelHeight*9, width: this.form.getClientAreaBounds().width, height: labelHeight},
				text: 'Piccadilly',
				multiLine: false
			});
			piccadillyLabelObj.setBackgroundColor('#0450A1');
			piccadillyLabelObj.setTextColor('white');

			victoriaLabelObj = new Osp.Ui.Controls.Label({
				bounds: { x: 0, y:labelHeight*10, width: this.form.getClientAreaBounds().width, height: labelHeight},
				text: 'Victoria',
				multiLine: false
			});
			victoriaLabelObj.setBackgroundColor('#009FE0');
			victoriaLabelObj.setTextColor('white');

			waterlooLabelObj = new Osp.Ui.Controls.Label({
				bounds: { x: 0, y:labelHeight*11, width: this.form.getClientAreaBounds().width, height: labelHeight},
				text: 'Waterloo & City',
				multiLine: false
			});
			waterlooLabelObj.setBackgroundColor('#70C3CE');
			waterlooLabelObj.setTextColor('white');

			docklandsLabelObj = new Osp.Ui.Controls.Label({
				bounds: { x: 0, y:labelHeight*12, width: this.form.getClientAreaBounds().width, height: labelHeight},
				text: 'Docklands Light Railway',
				multiLine: false
			});
			docklandsLabelObj.setBackgroundColor('#00BBB4');
			docklandsLabelObj.setTextColor('white');

			overgroundLabelObj = new Osp.Ui.Controls.Label({
				bounds: { x: 0, y:labelHeight*13, width: this.form.getClientAreaBounds().width, height: labelHeight},
				text: 'Overground',
				multiLine: false
			});
			overgroundLabelObj.setBackgroundColor('#F86C00');
			overgroundLabelObj.setTextColor('white');

			
			this.form.addControl(bakerlooLabelObj);
			this.form.addControl(centralLabelObj);
			this.form.addControl(circleLabelObj);
			this.form.addControl(districtLabelObj);
			this.form.addControl(eastlondonLabelObj);
			this.form.addControl(hammersmithLabelObj);
			this.form.addControl(jubileeLabelObj);
			this.form.addControl(metropolitanLabelObj);
			this.form.addControl(northernLabelObj);
			this.form.addControl(piccadillyLabelObj);
			this.form.addControl(victoriaLabelObj);
			this.form.addControl(waterlooLabelObj);
			this.form.addControl(docklandsLabelObj);
			this.form.addControl(overgroundLabelObj);

			alert('Test ' + statusResult);

		}
	}
});