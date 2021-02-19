import { EnroleeModule } from './enrolee.module';

describe('EnroleeModule', () => {
    let enroleeModule: EnroleeModule;

    beforeEach(() => {
        employeeModule = new EnroleeModule();
    });

    it('should create an instance', () => {
        expect(enroleeModule).toBeTruthy();
    });
});
