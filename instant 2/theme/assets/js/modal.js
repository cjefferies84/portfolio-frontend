BootstrapDialog.show({
            message: 'Hi Apple!',
            buttons: [{
                label: 'Button 1'
            }, {
                label: 'Button 2',
                cssClass: 'btn-primary',
                action: function(){
                    alert('Hi Orange!');
                }
            }, {
                icon: 'glyphicon glyphicon-ban-circle',
                label: 'Button 3',
                cssClass: 'btn-warning'
            }, {
                label: 'Close',
                action: function(dialogItself){
                    dialogItself.close();
                }
            }]
        });/**
 * Created by cjefferies on 4/27/15.
 */
