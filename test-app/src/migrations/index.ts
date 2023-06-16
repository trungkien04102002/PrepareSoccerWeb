import { TestAppApplication } from "../application";
import { DataUpdaterService } from "../services";

export async function testNew(app: TestAppApplication){
    const dataUpdaterService : DataUpdaterService =  await app.get('DataUpdaterService');
    console.log('da', dataUpdaterService.testFunction)
    await dataUpdaterService.testFunction();
}