module puremvc {
    "use strict";

    /**
     * A base <code>IMediator</code> implementation.
     *
     * Typically, a <code>Mediator</code> will be written to serve one specific control or group
     * controls and so, will not have a need to be dynamically named.
     */
    export class Mediator extends Notifier implements IMediator, INotifier {
        /**
         * The name of the <code>Mediator</code>.
         *
         * @protected
         */
        mediatorName:string = null;

        /**
         * The <code>Mediator</code>'s view component.
         *
         * @protected
         */
        public view:any = null;

        /**
         * Constructs a <code>Mediator</code> instance.
         *
         * @param mediatorName
         *        The name of the <code>Mediator</code>.
         *
         * @param view
         *        The view component handled by this <code>Mediator</code>.
         */
        constructor(mediatorName:string = null, view:any = null) {
            super();
            this.mediatorName = (mediatorName != null) ? mediatorName : Mediator.NAME;
            this.view = view;
        }

        /**
         * Get the <code>Mediator</code> instance name.
         *
         * @return
         *        The <code>Mediator</code> instance name
         */
        getMediatorName():string {
            return this.mediatorName;
        }


        /**
         * List the <code>INotification</code> names this <code>IMediator</code> is interested in
         * being notified of.
         *
         * @return
         *        The list of notifications names in which is interested the <code>Mediator</code>.
         */
        listNotificationInterests():string[] {
            return [];
        }

        /**
         * Handle <code>INotification</code>s.
         *
         *
         * Typically this will be handled in a switch statement, with one 'case' entry per
         * <code>INotification</code> the <code>Mediator</code> is interested in.
         *
         * @param notification
         *        The notification instance to be handled.
         */
        handleNotification(notification:INotification):void {

        }

        /**
         * Called by the View when the Mediator is registered. This method has to be overridden
         * by the subclass to know when the instance is registered.
         */
        onRegister():void {

        }

        /**
         * Called by the View when the Mediator is removed. This method has to be overridden
         * by the subclass to know when the instance is removed.
         */
        onRemove():void {

        }

        /**
         * Default name of the <code>Mediator</code>.
         *
         * @constant
         */
        static NAME:string = 'Mediator';
    }
}