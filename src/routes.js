module.exports = (bot, details) => {
    details.forEach(dtl => {
        if(('trigger_action' in dtl)){
            if(('confirmPrompt' in dtl)){
                if(('onSelectAction' in dtl)){
                    bot.dialog(dtl.dialog_id, dtl.dialog)
                    .triggerAction({
                    matches: dtl.trigger_action,
                    confirmPrompt: dtl.confirmPrompt,
                    onSelectAction: dtl.onSelectAction
                    });    
                }else{
                    bot.dialog(dtl.dialog_id, dtl.dialog)
                    .triggerAction({
                        matches: dtl.trigger_action,
                        confirmPrompt: dtl.confirmPrompt
                    });
                }
            }else{
                bot.dialog(dtl.dialog_id, dtl.dialog)
                .triggerAction({
                    matches: dtl.trigger_action
                });
            }
        } else {
            bot.dialog(dtl.dialog_id, dtl.dialog);
        }
    });
}