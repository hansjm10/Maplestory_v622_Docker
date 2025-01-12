/*
@	Author : Raz
@
@	NPC = Arturo
@	Map =  Hidden-Street <Abandoned Tower <Determin to adventure> >
@	NPC MapId = 922011100
@	Function = Warp out of LPQ + Give Reward
@
 */

importPackage(net.sf.odinms.client);

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {  
    if (mode == -1) {//ExitChat
        cm.dispose();
    }else if (mode == 0){//No
        cm.sendOk("Ok, come talk to me again, when you want your reward");
        cm.dispose();
    }else{//Regular Talk
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendYesNo("Congratulations, would you like to collect your reward?");
        }else if (status == 1) {
            var eim = cm.getPlayer().getEventInstance();
            if(eim != null){
                eim.leftParty(cm.getPlayer());
                cm.gainMeso(10000000);
            } else {
                cm.warp(109050001);
                cm.wrong();
            }
            cm.dispose();
        }      
    }
}
     
function isLeader(){
    if(cm.getParty() == null){
        return false;
    }else{
        return cm.isLeader();
    }
}