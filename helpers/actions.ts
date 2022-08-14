import { Locator, Page, test } from '@playwright/test';

interface ITypeOptions {
    delay?: number;
    noWaitAfter?: boolean;
    timeout?: number;
    withClear?: boolean;
}

interface IPressOptions {
    delay?: number;
    noWaitAfter?: boolean;
    timeout?: number;
}

interface IClickOptions {
    button?: 'left' | 'right' | 'middle';
    clickCount?: number;
    delay?: number;
    force?: boolean;
    modifiers?: Array<'Alt' | 'Control' | 'Meta' | 'Shift'>;
    noWaitAfter?: boolean;
    position?: {
        x: number;

        y: number;
    };
    timeout?: number;
    trial?: boolean;
}

class Actions {
    public async type(element: Locator, text: string, options: ITypeOptions = {}): Promise<void> {
        await test.step(`Type text: "${text}"`, async () => {
            if (options.withClear) {
                await this.clearInput(element);
            }
            await element.type(text, options);
        });
    }

    public async clearInput(element: Locator): Promise<void> {
        await element.fill('');
    }

    public async pressButton(element: Locator, button: string, options?: IPressOptions): Promise<void> {
        await test.step(`Press "${button}" Keyboard button`, async () => {
            await element.press(button, options);
        });
    }

    public async click(element: Locator, options?: IClickOptions): Promise<void> {
        await test.step(`Click on element with locator: ${element}`, async () => {
            await element.click(options);
        });
    }

    public async goTo(page: Page, link: string): Promise<void> {
        await test.step('Open link', async () => {
            await page.goto(link);
        });
    }
}

export default new Actions();