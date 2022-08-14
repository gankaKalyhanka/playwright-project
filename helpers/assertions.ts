import { expect, Locator, test } from '@playwright/test';

export class Assertions {
    static async expectToBeEqual<T>(actual: T, expected: T): Promise<void> {
        await test.step(`Expect Actual result "${actual}" to Be equal with Expected "${expected}"`, async () => {
            await expect.soft(actual).toEqual(expected);
        });
    }

    static async expectToBeLessThanOrEqual(actual: number, expected: number): Promise<void> {
        await test.step(`Expect Actual result "${actual}" to be less than or equal Expected "${expected}"`, async () => {
            expect.soft(actual).toBeLessThanOrEqual(expected);
        });
    }

    static async expectToBeGreaterThanOrEqual(actual: number, expected: number): Promise<void> {
        await test.step(`Expect Actual result "${actual}" to be greater than or equal Expected "${expected}"`, async () => {
            expect.soft(actual).toBeGreaterThanOrEqual(expected);
        });
    }

    static async expectToContain<T>(actual: T, expected: T, isStrict = false): Promise<void> {
        await test.step(`Expect value: "${JSON.stringify(actual)}" to contain Value: "${JSON.stringify(
            expected,
        )}"`, async () => {
            if (!isStrict) {
                await expect.soft(actual).toContain(expected);
            } else {
                await expect(actual).toContain(expected);
            }
        });
    }

    static async expectToBeHidden(element: Locator): Promise<void> {
        await test.step(`Expect "${element}" element to Be Hidden`, async () => {
            try {
                await expect.soft(element).toBeHidden({ timeout: 15000 });
            } catch (error) {
                throw new Error(`Element was present on the page during timeout, but expected to be hidden.
        Element selector: "${element}"`);
            }
        });
    }

    static async expectToBeVisible(element: Locator): Promise<void> {
        await test.step(`Expect "${element}" to be visible`, async () => {
            await expect.soft(element).toBeVisible({ timeout: 15000 });
        });
    }

    static async expectToBeEditable(element: Locator): Promise<void> {
        await test.step(`Expect "${element}" to be editable`, async () => {
            await expect.soft(element).toBeEditable({ timeout: 15000 });
        });
    }

    static async containsText(actual: Locator, expected: any): Promise<void> {
        await test.step(`Expect "${actual}" to contain text `, async () => {
            await expect(actual).toHaveText(expected);
        });
    }

    static async expectToBeEnabled(element: Locator): Promise<void> {
        await test.step(`Expect "${element}" to be enabled`, async () => {
            await expect.soft(element).toBeEnabled({ timeout: 15000 });
        });
    }

    static async expectToBeTruthy(value: any): Promise<void> {
        await test.step(`Expect "${value}" to be truthy`, async () => {
            await expect.soft(value).toBeTruthy();
        });
    }

    static async containsValue(actual: Locator, expected: any): Promise<void> {
        await test.step(`Expect "${actual}" to contain text `, async () => {
            await expect(actual).toHaveValue(expected);
        });


    }}
