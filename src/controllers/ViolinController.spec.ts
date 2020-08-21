import createChart from '../__tests__/createChart';
import { IViolinControllerConfiguration, IViolinDataPoint, ViolinController } from './ViolinController';
import { Samples } from './__tests__/utils';
import { registry } from '@sgratzl/chartjs-esm-facade';
import { Violin } from '../elements';

describe('violin', () => {
  beforeAll(() => {
    registry.addControllers(ViolinController);
    registry.addElements(Violin);
  });
  test('default', () => {
    const samples = new Samples(10);
    const chart = createChart<IViolinDataPoint, string, IViolinControllerConfiguration>({
      type: ViolinController.id,
      data: {
        labels: samples.months({ count: 7 }),
        datasets: [
          {
            label: 'Dataset 1',
            backgroundColor: 'red',
            borderWidth: 1,
            data: samples.boxplotsArray({ count: 7 }),
            outlierBackgroundColor: '#999999',
          },
          {
            label: 'Dataset 2',
            backgroundColor: 'blue',
            borderWidth: 1,
            data: samples.boxplotsArray({ count: 7 }),
            outlierBackgroundColor: '#999999',
          },
        ],
      },
    });
    return chart.toMatchImageSnapshot();
  });
});