import { DataUpdaterService } from './../services/data-updater.service';
import {
  inject,
  /* inject, Application, CoreBindings, */
  lifeCycleObserver, // The decorator
  LifeCycleObserver, // The interface
} from '@loopback/core';

/**
 * This class will be bound to the application as a `LifeCycleObserver` during
 * `boot`
 */
@lifeCycleObserver('')
export class DataUpdaterObserver implements LifeCycleObserver {
  /*
  constructor(
    @inject(CoreBindings.APPLICATION_INSTANCE) private app: Application,
  ) {}
  */
  constructor(
    @inject('DataUpdaterService')
    public dataUpdaterService: DataUpdaterService,
  ) {}

  /**
   * This method will be invoked when the application initializes. It will be
   * called at most once for a given application instance.
   */
  async init(): Promise<void> {
    // Add your logic for init
  }

  /**
   * This method will be invoked when the application starts.
   */
  // async testFunction(){
  //   console.log('This function will be invoke when start the application!')
  // }

  async start(): Promise<void> {
    // console.log('Calling testFunction() from DataUpdaterObserver...');
    // await this.dataUpdaterService.testFunction();
  }
  /**
   * This method will be invoked when the application stops.
   */
  async stop(): Promise<void> {
    // Add your logic for stop
  }
}
