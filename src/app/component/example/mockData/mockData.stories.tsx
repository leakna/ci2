// Replace your-framework with the name of your framework (e.g. nextjs, vue3-vite)


import { http, HttpResponse, delay } from 'msw';

import { DocumentScreen } from './mockData';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DocumentScreen> = {
  title:'request/mockdata',
  component: DocumentScreen,
};

export default meta;
type Story = StoryObj<typeof DocumentScreen>;

// 👇 The mocked data that will be used in the story
const TestData = {
  user:[
    {
      gmail:'leakna@gmail.com',
      name:'John Doe',
      age:30,
      status:'approved'
    }
  ]
  
};

export const MockedSuccess: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('https://your-restful-endpoint/', () => {
          return HttpResponse.json(TestData);
        }),
      ],
    },
  },
};

export const MockedError: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('https://your-restful-endpoint', async () => {
          await delay(800);
          return new HttpResponse(null, {
            status: 403,
          });
        }),
      ],
    },
  },
};