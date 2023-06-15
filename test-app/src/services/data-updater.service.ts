import {injectable, /* inject, */ BindingScope, inject} from '@loopback/core';
import { TeamService } from './team.service';
import * as https from 'https';  
import * as fs from 'fs';  
import fetch from 'node-fetch';

interface ApiResponse<T> {
  data: T;
}

@injectable({scope: BindingScope.TRANSIENT})
export class DataUpdaterService {
    constructor(
      @inject('TeamService')
      public teamService : TeamService,
      
    ) {}
    
    async fetchData(){
      console.log('Start fetching data......')
      const urls = [
        'http://localhost:5000/api/tourseas',
        'http://localhost:5000/api/teams'];

      await this.fetchAndStore(urls);
      // Run every 30 minutes
      setInterval(() => {
        this.fetchAndStore(urls);
      }, 30 * 60 * 1000); 
    }
    async fetchAndStore(urls: string[]) {
    
      const date = new Date();
      const folderName = `data-${date.getTime()}`;
      
      fs.mkdirSync(folderName);
      for (const url of urls) {
        const data = fetch(url);
        const segments = url.split('/');
        const lastSegment = segments[segments.length - 1];
        const filename = lastSegment + '.json';
        const folderPath = `storage/${folderName}`;

        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath, { recursive: true });
        }
        // Save to file 
        fs.writeFileSync(`${folderPath}/${filename}`, JSON.stringify(data));
        console.log('Finish fetching data and saving file......')
      }
    }
} 


