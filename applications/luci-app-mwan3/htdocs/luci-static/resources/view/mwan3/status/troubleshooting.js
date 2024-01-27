'use strict';
'require fs';
'require view';

return view.extend({
	load: function() {
		return L.resolveDefault(fs.exec_direct('/usr/sbin/mwan3', [ 'internal', 'ipv4' ]),'');
	},

	render: function (report) {
		return E('div', { 'class': 'cbi-map', 'id': 'map' }, [
			E('h2', _('MultiWAN Manager - Troubleshooting')),
			E('div', { 'class': 'cbi-section' }, [
				E('pre', [ report ])
			]),
		])
	},

	handleSaveApply: null,
	handleSave: null,
	handleReset: null
})
