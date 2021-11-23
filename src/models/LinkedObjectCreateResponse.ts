/**
 * PandaDoc Public API
 * PandaDoc Public API documentation
 *
 * OpenAPI spec version: 1.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class LinkedObjectCreateResponse {
    'id'?: string;
    /**
    * CRM name (lowercase). See the list above.
    */
    'provider'?: string;
    /**
    * Entity type. The system validates if the type is supported. See the list for each CRM above.
    */
    'entityType'?: string;
    /**
    * Entity unique identifier. The system validates if the entity exists.
    */
    'entiryId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "provider",
            "baseName": "provider",
            "type": "string",
            "format": ""
        },
        {
            "name": "entityType",
            "baseName": "entity_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "entiryId",
            "baseName": "entiry_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LinkedObjectCreateResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

