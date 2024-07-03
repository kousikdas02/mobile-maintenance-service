import { InjectionToken } from '@angular/core';
import { Request, Response } from 'express';

export const REQUEST = new InjectionToken<string>('REQUEST');
export const RESPONSE = new InjectionToken<Response>('RESPONSE');
