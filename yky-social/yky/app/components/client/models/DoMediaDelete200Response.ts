/* tslint:disable */
/* eslint-disable */
/**
 * social-ts
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DoMediaDelete200Response
 */
export interface DoMediaDelete200Response {
    /**
     * 
     * @type {string}
     * @memberof DoMediaDelete200Response
     */
    message: string;
    /**
     * 
     * @type {string}
     * @memberof DoMediaDelete200Response
     */
    key: string;
}

/**
 * Check if a given object implements the DoMediaDelete200Response interface.
 */
export function instanceOfDoMediaDelete200Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "message" in value;
    isInstance = isInstance && "key" in value;

    return isInstance;
}

export function DoMediaDelete200ResponseFromJSON(json: any): DoMediaDelete200Response {
    return DoMediaDelete200ResponseFromJSONTyped(json, false);
}

export function DoMediaDelete200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DoMediaDelete200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': json['message'],
        'key': json['key'],
    };
}

export function DoMediaDelete200ResponseToJSON(value?: DoMediaDelete200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
        'key': value.key,
    };
}

